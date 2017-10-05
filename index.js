var colors = require('colors');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input == null) {
      process.stdout.write(" \n");
    	process.stdout.write(colors.cyan("OK, you've got colors now, so type 'exit' to quit the app.\n\n"));
	};
    if (input !== null) {
        var instruction = input.toString().trim();
        
        switch (instruction) {
          case 'getOSinfo':
            getOSinfo();
            break;
        	case 'exit':
        		process.stdout.write('Quitting app!\n\n');
        		process.exit();
        		break;
        	default:
            process.stderr.write('That is not "exit"!\n\n');
        	  break;
        }
    }
});

var OSinfo = require('./modules/OSInfo');
OSinfo.print();

