const first = document.querySelector("#first");

first.insertAdjacentHTML('beforeend', `<div class="test">beforeend</div>`) // just before end of the element
first.insertAdjacentHTML('afterbegin', `<div class="test">afterbegin</div>`) // just after the element created
first.insertAdjacentHTML('beforebegin', `<div class="test">beforebegin</div>`) // outside the element but first
first.insertAdjacentHTML('afterend', `<div class="test">afterend    </div>`) // outside the element but last
first.remove(); // removes the entire node