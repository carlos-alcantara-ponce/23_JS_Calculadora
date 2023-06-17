function fImpares() {


    for (i = 1; i <= 20; i++) {

        if (!(i % 2 === 0)) {
            console.log(i);
        }
    }

}


function fMul3() {


    for (i = 100; i > -1; i--) {

        if (i % 3 === 0) {
            console.log(i);
        }
    }
}



function fSecuen() {

    for (i = 4; i >= -3.5; i += -1.5) {


        console.log(i);

    }

}

function fSigma() {
    var sum = 0;

    for (i = 1; i <= 100; i++) {


        sum = sum + i;


    }

    console.log(sum);


}


function fFactorial() {

    var product = 1;

    for (i = 1; i <= 12; i++) {


        product = product * i;


    }

    console.log(product);



}