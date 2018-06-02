function staircase(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ');
        }
        for (let k = 0; k < i + 1; k++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

staircase(4);
//    #
//   ##
//  ###
// ####
