import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      product_list: [
        {
          id: 1,
          name: `Rubik's Apprentice 2x2`,
          image: "../src/assets/img/2x2.jpg",
          description: `Struggling to solve the classic 2x2 or 3x3 Rubik’s Cubes? 
        This simple Cube, the Rubik’s Apprentice, is a step-by-step puzzle 
        designed so that you can later take on the more complex Cubes with ease. 
        Look no further for a fun puzzle for beginners. This activity Cube 3D puzzle is 
        the easiest to solve of the Rubik’s collection. Puzzle-loving adults and kids ages 
        7 and up will love this anxiety relief fidget toy Cube Solve your way through 3 
        levels of challenge with the Rubik’s Apprentice. `,
          code: "RC-01",
        },
        {
          id: 2,
          name: `Rubik's 3x3`,
          image: "../src/assets/img/3x3.jpg",
          description: `The Rubik’s Cube is a classic colour-matching 
        puzzle that can be enjoyed at home or on the move. The original, 
        classic 3x3 cube is a highly addictive brain teaser that has fascinated 
        fans all around the world for decades. The Rubik’s Cube features six different 
        sides, each made up of nine colourful squares. A must for puzzle lovers, 
        the aim is to try twist and turn the Rubik’s Cube to its original state, 
        with every side having one solid colour. There are... wait for it... 43,252,003,274,489,856,000 
        ways of arranging the squares, and only one of these is the solution. Turn and twist away can 
        you solve it? The new and improved Rubik’s Cube features a mechanism 
        that results in a smoother, faster and more reliable play. 
        The traditional stickers have been replaced with plastic tiles 
        which means no fading, peeling or cheating!`,
          code: "RC-02",
        },
        {
          id: 3,
          name: `Rubik's Master 4x4`,
          image: "../src/assets/img/4x4.jpg",
          description: `Think you’re a Rubik’s Master? If you’ve beaten the original 3 x 3 
        Rubik’s Cube, it’s time to step up to the next level! This 4 x 4 puzzle is 
        made up of 56 small cubes on the surface, but the center pieces can move in 
        relation to each other, making it even more difficult to solve. The new 
        Rubik’s Master is the smoothest Cube model yet. A slightly smaller version, 
        designed to twist and turn with ease in your hand, you’ll be mastering this 
        4 x 4 faster than ever before. The original Rubik’s Cube has 43,252,003,274,489,856,000 
        combinations, but only one solution.`,
          code: "RC-03",
        },
        {
          id: 4,
          name: `Rubik's Pyramid`,
          image: "../src/assets/img/piramid.jpg",
          description: `Don’t let the size of the Rubik’s Pyramid fool you, 
        it may be small, but is still a big challenge. It is 2-layered with 
        a mechanism like the Mini Cube. Each twist and turn will create a different 
        shape. It is only finished when it's back to the pyramid shape with each 
        side matching by colour. The Rubik’s Pyramid features excellent corner 
        cutting and can be twisted and turned with ease. It has a mechanism designed 
        to make it faster, smoother and more reliable than ever. Now made with colour 
        tiles and no more stickers, which means it will last longer. 
        No more fading or peeling. And most all no more cheating! A puzzle that is 
        difficult to put down, you won't want to leave it on the shelf until you have time, 
        so pop it in your pocket and take it anywhere. Keep it on you and test your skills 
        with the Rubik’s Pyramid on the go!`,
          code: "RC-04",
        },
      ],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getProductById(product_code) {
      let result = this.product_list.find(
        (product) => product.code === product_code
      );
      if (result != undefined) {
        return result;
      } else {
        return null;
      }
    },
  },
});
