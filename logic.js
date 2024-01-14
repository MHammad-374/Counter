let counter = document.getElementById('Increment');
        let inc = 0
        counter.innerHTML = inc;
        function increment() {
            inc = inc + 1;
            counter.innerHTML = inc;
        }
        function incrementOf2() {
            // counter.innerHTML = inc;
            inc = inc + 2;
            counter.innerHTML = inc;
        }
        function incrementOf3() {
            // counter.innerHTML = inc;
            inc = inc + 3;
            counter.innerHTML = inc;
        }
        function reset() {
            // counter.innerHTML = inc;
            inc = 0;
            counter.innerHTML = inc;
        }