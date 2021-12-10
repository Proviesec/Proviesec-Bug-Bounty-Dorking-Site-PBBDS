function cors_test(test_url) {
    $.ajax ({
        url: test_url,
        success: function(data) 
        {
            console.log(data);
        }
    });
}
