$(document).ready(()=> {
    const costomerButton = $('#customer');
    const freelancerButton = $('#freelancer');
    const blockCostomer = $('#block-customer');
    const blockFreelancer = $('#block-freelancer');
    const buttonExit = $('#btn-exit');
    const formCostomer = $('#form-customer');
    const submitButton = formCostomer.find('.btn');
    let orders = [];
    console.log(formCostomer);

    costomerButton.click(()=>{
        blockCostomer.show(100);
        blockFreelancer.hide(100);
        buttonExit.show();
    });
    freelancerButton.click(()=>{
        buttonExit.show();
        blockFreelancer.show(100);
        blockCostomer.hide(100);
    });
    buttonExit.click(() => {
        buttonExit.hide();
        blockFreelancer.hide();
        blockCostomer.hide();
    });

    formCostomer.click((event)=>{
        $(event.target).val('');
        //f[pojvhuc
    });
});