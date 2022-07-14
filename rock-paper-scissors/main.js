computerPlay = () => (
    Math.floor(Math.random() * 3) + 1
);

for (let i = 0; i < 15; i++) {
    console.log(computerPlay());
}