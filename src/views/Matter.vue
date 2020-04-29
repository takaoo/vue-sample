<template>
  <div class="content">
    <div id="drawhere"></div>
  </div>
</template>

<script>
import Matter from "matter-js";

export default {
  data: function() {
    return {
      debug: null,
      canvasProp: {
        wallWidth: 1
      }
    };
  },
  mounted() {
    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      element: document.querySelector("#drawhere"),
      engine: engine
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80,{ frictionAir: 0.5 });
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // walls
    var a = Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      b = Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      c = Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      d = Bodies.rectangle(0, 300, 50, 600, { isStatic: true });

    // var stack = Matter.Composites.stack(200, 0, 5, 5, 50, 0, function(x, y) {
    //   return Bodies.circle(x, y, Matter.Common.random(1, 30), {
    //     restitution: 0.8, //弾力０〜１
    //     // friction: 1 //摩擦0~1
    //   });
    // });

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground, a, b, c, d]);

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

    World.add(engine.world, [
      // Matter.Composites.car(100, 0, 100, 10, 10),
       Matter.Composites.pyramid(200, 258, 5, 4, 0, 0, function(x, y) {
        return Bodies.rectangle(x, y, 40, 40);
    })
      ]
    )

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
  }
};
</script>