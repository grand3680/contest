<script lang="ts">
    import { onMount } from 'svelte';
    import Tank from './tankSprite.svelte'

    interface Player {
      x: number;
      y: number;
      hp: number;
      lastDirection: { dx: number; dy: number };
    }
  
    interface Enemy {
      x: number;
      y: number;
      hp: number;
    }
  
    interface Bullet {
      id: number;
      x: number;
      y: number;
      dx: number;
      dy: number;
    }
  
    let player: Player = { x: 5, y: 5, hp: 100, lastDirection: { dx: 0, dy: 0 } };
    let enemy: Enemy = { x: 3, y: 3, hp: 50 };
    let bullets: Bullet[] = [];
    let bulletId = 0;
    let message: string = '';
    let gameOver: boolean = false;
  

    const walls = [
      ...Array.from({ length: 10 }, (_, i) => ({ x: i, y: 0 })),
      ...Array.from({ length: 10 }, (_, i) => ({ x: i, y: 9 })),
      ...Array.from({ length: 8 }, (_, i) => ({ x: 0, y: i + 1 })),
      ...Array.from({ length: 8 }, (_, i) => ({ x: 9, y: i + 1 })),
      { x: 1, y: 1, breakable: true },
      { x: 2, y: 1, breakable: true },
      { x: 3, y: 1, breakable: true },
      { x: 1, y: 3, breakable: true },
      { x: 1, y: 4, breakable: true },
      { x: 2, y: 4, breakable: true },
      { x: 3, y: 4, breakable: true },
      { x: 5, y: 5, breakable: false }, // Unbreakable wall
      { x: 5, y: 6, breakable: false },
      { x: 5, y: 7, breakable: false },
      { x: 7, y: 5, breakable: false },
      { x: 8, y: 5, breakable: false },
      { x: 9, y: 5, breakable: false },
      { x: 7, y: 9, breakable: false },
      { x: 8, y: 9, breakable: false },
      { x: 9, y: 9, breakable: false }
    ];
  
    onMount(() => {
      window.addEventListener('keydown', handleKeyDown);
      setInterval(moveBullets, 200); // Slower bullet movement
    });
  
    function handleKeyDown(event: KeyboardEvent) {
      if (!gameOver) {
        switch (event.key) {
          case 'ArrowLeft':
            moveSmoothly(-1, 0);
            break;
          case 'ArrowRight':
            moveSmoothly(1, 0);
            break;
          case 'ArrowUp':
            moveSmoothly(0, -1);
            break;
          case 'ArrowDown':
            moveSmoothly(0, 1);
            break;
          case ' ':
            if (bullets.length < 5) { // Limit bullets on screen
              shoot(player.lastDirection.dx, player.lastDirection.dy);
            }
            break;
        }
      }
    }
  
    function moveSmoothly(dx: number, dy: number) {
      const newX = player.x + dx;
      const newY = player.y + dy;
  
      if (!gameOver && newX >= 0 && newX < 10 && newY >= 0 && newY < 10 && !isWall(newX, newY)) {
        player.x = newX;
        player.y = newY;
        player.lastDirection = { dx, dy };
        checkEncounter();
      }
    }
  
    function isWall(x: number, y: number) {
      return walls.some(wall => wall.x === x && wall.y === y);
    }
  
    function checkEncounter() {
      if (player.x === enemy.x && player.y === enemy.y) {
        message = 'You encountered an enemy!';
      }
    }
  
    function shoot(dx: number, dy: number) {
      const bullet: Bullet = { id: bulletId++, x: player.x, y: player.y, dx, dy };
      bullets.push(bullet);
    }
  
    function moveBullets() {
      bullets.forEach(bullet => {
        bullet.x += bullet.dx;
        bullet.y += bullet.dy;
        checkHit(bullet);
      });
    }
  
    function checkHit(bullet: Bullet) {
      if (bullet.x < 0 || bullet.x >= 10 || bullet.y < 0 || bullet.y >= 10 || isWall(bullet.x, bullet.y)) {
        const wallIndex = walls.findIndex(wall => wall.x === bullet.x && wall.y === bullet.y && wall.breakable);
        if (wallIndex !== -1) {
          walls.splice(wallIndex, 1); // Remove breakable wall
        }
        bullets = bullets.filter(b => b !== bullet); // Remove bullet if it hits a wall or goes out of bounds
        return;
      }
      if (bullet.x === enemy.x && bullet.y === enemy.y) {
        enemy.hp -= 10;
        if (enemy.hp <= 0) {
          message = 'You win! Congratulations!';
          gameOver = true;
        }
        bullets = bullets.filter(b => b !== bullet); // Remove bullet if it hits the enemy
        return;
      }
    }
  
    function reset() {
      player = { x: 5, y: 5, hp: 100, lastDirection: { dx: 0, dy: 0 } };
      enemy = { x: 3, y: 3, hp: 50 };
      bullets = [];
      message = '';
      gameOver = false;
    }
  </script>
  
  <style lang="scss">
    .container {
      text-align: center;
      margin-top: 50px;
    }
    .button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    .map {
      position: relative;
      display: grid;
      grid-template-columns: repeat(10, 50px);
      grid-template-rows: repeat(10, 50px);
      margin-top: 20px;
    }
    .cell {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .wall {
      background-color: black;
    }
    .bullet {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
      animation: moveBullet 0.2s linear infinite;
    }
    @keyframes moveBullet {
      0% { transform: scale(0.8); }
      50% { transform: scale(1.2); }
      100% { transform: scale(0.8); }
    }
  </style>
  
  <div class="container">
    <h1>Battle Game</h1>
    <div>
      <p>Your HP: {player.hp}</p>
      <p>Enemy HP: {enemy.hp}</p>
      <p>{message}</p>
    </div>
    <div class="map">
      <!-- {#each walls as cell}
        <div class="cell" class:wall={isWall(cell.x, cell.y)}></div>
      {/each} -->

      {#each Array(10) as _, row}
        {#each Array(10) as _, col}
                <div class="cell" class:wall={isWall(col, row)}></div>
            {/each}
        {/each}

      <Tank x={player.x} y={player.y} />
      <Tank x={enemy.x} y={enemy.y} />
      {#each bullets as bullet}
        <div class="bullet" style="left: {bullet.x * 50}px; top: {bullet.y * 50}px;"></div>
      {/each}
    </div>
    <div>
      <button on:click={reset}>Reset</button>
    </div>
  </div>
  