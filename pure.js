const state = {
    value: 5,
};

function impure(multiplier){
    // state.value = 6;
    state.value = state.value * multiplier;
}
 
impure(2);
console.log(state.value);

impure(2);
console.log(state.value);