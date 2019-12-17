document.addEventListener('DOMContentLoaded', () =>{
        const costomerButton = document.getElementById('customer');
        const freelancerButton = document.getElementById('freelancer');
        const blockCostomer = document.getElementById('block-customer');
        const blockFreelancer = document.getElementById('block-freelancer');
        const buttonExit = document.getElementById('btn-exit');
        const formCostomer = document.getElementById('form-customer');
        const submitButton = formCostomer.getElementsByClassName('btn')[0];
        let orders = [];
        //console.dir(submitButton);
        //console.log(blockFreelancer);

        costomerButton.addEventListener('click', ()=>{
            blockCostomer.style.display = 'block';
            buttonExit.style.display = 'block';
            blockFreelancer.style.display = 'none';
        });

        freelancerButton.addEventListener('click', ()=>{
            blockCostomer.style.display = 'none';
            blockFreelancer.style.display = 'block';
            buttonExit.style.display = 'block';
        });

        buttonExit.onclick = ()=>{
            blockCostomer.style.display = 'none';
            blockFreelancer.style.display = 'none';
            buttonExit.style.display = 'none';
        };

        formCostomer.addEventListener('click', (event)=>{
            if(event.target.className === 'form-control'
                && event.target.type !== 'number'
            && event.target.type !== 'date'){
                event.target.value = '';
            }
        });

        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            let elementsObj = {};
            let nodeElements = formCostomer.querySelectorAll("input.form-control, input[type=radio]:checked, textarea");
            let formElements = nodeElements.forEach((item) => {
                elementsObj[item.name] = item.value;
            });
            orders.push(elementsObj);
            formCostomer.reset();
            console.log(orders);
        });

    });