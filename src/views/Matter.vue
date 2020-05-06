<template>
  <v-container>
    <div id="drawhere"></div>
  </v-container>
</template>

<script>
import Matter from "matter-js";
import Kopen from "@/assets/ko2.png";

export default {
  data: () => ({

}),
  mounted() {
    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    var width = window.innerWidth * 0.9;
    var height = window.innerHeight;
    // create a renderer
    var render = Render.create({
      element: document.querySelector("#drawhere"),
      engine: engine,
      options: {
        width: width,
        height: height,
        pixelRatio: 2, //Pixel比; スマホ用に2にする
        wireframes: false
        // background: '#fff'
      }
    });
    console.log(render);

    // create two boxes and a ground
    var boxA = Bodies.rectangle(width * 0.7, 100, width * 0.15, width * 0.15, {
      frictionAir: 0.5
    });
    var boxB = Bodies.rectangle(100, 100, width * 0.15, width * 0.15, {
      render: {
        sprite: {
          texture: Kopen,
          xScale:2,
          yScale:2
        }
      },
    });
    console.log(boxB);
    

    // walls
    World.add(engine.world, [
      // Bodies.rectangle(400, 0, 800, 5, { isStatic: true }),
      Bodies.rectangle(width * 0.5, 550, width * 0.9, 50, { isStatic: true })
      // Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      // Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);

    World.add(engine.world, [boxA,boxB]);

    // add mouse control
    var mouse = Matter.Mouse.create(render.canvas),
      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: true
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);

    // add cloth bodies
    var group = Matter.Body.nextGroup(true),
      particleOptions = {
        friction: 0.00001,
        collisionFilter: { group: group },
        render: { visible: false }
      },
      constraintOptions = { stiffness: 0.06 },
      cloth = Matter.Composites.softBody(
        width * 0.4,
        height * 0.3,
        20,
        10,
        10,
        20,
        false,
        5,
        particleOptions,
        constraintOptions
      );

    for (var i = 0; i < 20; i++) {
      cloth.bodies[i].isStatic = true;
    }

    World.add(engine.world, [
      // cloth,
      Bodies.circle(width * 0.6, height * 0.8, width * 0.1, { isStatic: true })
      // Matter.Composites.newtonsCradle(width * 0.6, height * 0.5, 6, 20, 200)
      // Matter.Composites.pyramid(100, 258, 10, 10, 0, 0, function(x, y) {
      //   return Bodies.rectangle(x, y, 20, 20);
      // })
    ]);

    // マウス押したら物体出現
    Matter.Events.on(mouseConstraint, "mousedown", e => {
      // console.log(e,"down");
      World.add(engine.world, [
        Matter.Bodies.rectangle(e.mouse.absolute.x, e.mouse.absolute.y, 20, 20)
      ]);
    });
  }
};
</script>