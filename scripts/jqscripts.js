$(document).ready(()=> {
    const costomerButton = $('#customer');
    const freelancerButton = $('#freelancer');
    const blockCostomer = $('#block-customer');
    const blockFreelancer = $('#block-freelancer');
    const buttonExit = $('#btn-exit');
    const formCostomer = $('#form-customer');
    const submitButton = formCostomer.find('.btn');
    $('#phone').mask('+7 (000)000-00-00');
    let orders = [];


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
        $e = $(event.target);
        if($e.hasClass('form-control')  && ($e.attr('type') !== 'date' && $e.attr('type') !== 'number')){
            $e.val('');
        }
    });

    submitButton.click((event) => {
        event.preventDefault();
        let order = {};
        $.each(formCostomer[0], (index, item) => {
            if($(item).hasClass('form-control') ||
                ($(item).hasClass('currency__radio') && $(item).prop('checked')) ){
                order[$(item).attr("name")] = $(item).val();
                //console.dir(order);
            }

        })
        formCostomer[0].reset();
        orders.push(order);
        console.dir(orders);
    });
});