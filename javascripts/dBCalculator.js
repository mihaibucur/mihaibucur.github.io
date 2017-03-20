$('input[name=referencePowLev], input[name=measuredPowLev]').keyup(function() {
    var divParent = $(this).closest('div');
    var referencePowLev = $('input[name=referencePowLev]', divParent).val()-0;
    var measuredPowLev = $('input[name=measuredPowLev]', divParent).val()-0;
    if (referencePowLev >= 0 && measuredPowLev >= 0)
        $('span.dBresult', divParent).text(10*Math.log10(measuredPowLev/referencePowLev));
});
