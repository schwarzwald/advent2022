const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 07: Part 1', () => {
  it('Should calculate the sum of total sizes of directories with a total size of at most 100000', () => {
    expect(part1(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`)).to.equal(95437);
  });
});
describe('Day 07: Part 2', () => {
  it('Should calculate the size of directory which needs to be removed to have at least 30000000 free space', () => {
    expect(part2(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`)).to.equal(24933642);
  });
});
