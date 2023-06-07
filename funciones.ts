function getAvarage(...grades: number[]): number {
  return grades.reduce((acc: number, curr: number) => acc + curr, 0) / grades.length;
}

const vic = getAvarage(10, 20, 30);
const dav = getAvarage(30, 30);
const rom = getAvarage(9, 20, 40);

console.log(vic, dav, rom)