function flatlandSpaceStations(n, c) {
  if (n === c.length) {
    return 0;
  } else {
    c = c.sort(function (a, b) {
      return a - b;
    });
    let index = 0;
    let largest = 0;

    console.log(c);
    //Get largest gap between stations
    if (c.length !== 1) {
      while (index < c.length) {
        if (c[index + 1] - c[index] > largest) {
          largest = c[index + 1] - c[index];
        }
        index++;
      }
    }
    largest = Math.floor(largest / 2);

    //Check if nearest station is further from city 0
    if (c[0] > largest) {
      largest = c[0];
    }

    //Check if nearest station is further from last city
    if (n - c[c.length - 1] - 1 > largest) {
      largest = n - c[c.length - 1] - 1;
    }
    return largest;
  }
}

console.log(
  flatlandSpaceStations(
    100000,
    [
      39572, 89524, 21749, 94613, 75569, 74800, 91713, 62107, 28574, 22617, 22271, 22624, 28116, 67573, 53717, 9358,
      65220, 59894, 78686, 10945, 33641, 11708, 8851, 11860, 66780, 64697, 799, 47782, 41971, 54170, 8960, 81543, 60047,
      47061, 92508, 51968, 38213, 84221, 14075, 66787, 23191, 52698, 5764, 51307, 20271, 59481, 77018, 1843, 19375,
      55704, 12789, 53016, 83764, 37992, 64877, 50545, 19041, 82028, 98327, 61012, 52551, 7287, 42555, 12598, 70700,
      51416, 80918, 8914, 35637, 11345, 75701, 58828, 80395, 97817, 26488, 17019, 57299, 3506, 18862, 93026, 75562,
      48003, 62395, 59327, 85996, 27272, 9872, 5037, 25652, 8199, 82402, 78203, 31838, 41309, 7153, 18890, 92725, 88071,
      27804, 28363, 99416, 19858, 3543, 79812, 17675, 30031, 96831, 91326, 49889, 15693, 84353, 25452, 80049, 46748,
      84779, 66045, 90372, 94651, 87434, 16024, 19202, 69836, 94228, 67392, 27498, 1381, 86282, 20223, 5805, 14087,
      48586, 5221, 50297, 68482, 85033, 67972, 98513, 98216, 59299, 48403, 30262, 60004, 73855, 10311, 6752, 74986,
      92708, 13476, 85989, 96494, 29500, 5191, 82683, 40080, 88935, 10181, 57814, 75217, 30404, 63619, 5656, 95343,
      68840, 55953, 63825, 70226, 23926, 62338, 68442, 99577, 27093, 15056, 59581, 17300, 25367, 82685, 92286, 34427,
      96161, 78275, 30922, 25661, 99818, 13605, 82094, 88753, 23786, 39908, 80323, 54190, 3527, 85979, 65885, 72367,
      41933, 29710, 58945, 82211, 8401, 43740,
    ]
  )
);
