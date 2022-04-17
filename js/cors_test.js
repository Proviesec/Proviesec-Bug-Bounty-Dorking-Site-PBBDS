function cors_test(test_url) {
    if (test_url) {
        $.ajax ({
            url: test_url,
            success: function(data) {
                console.log(data);
            }
        });
    } else {
        data = "No URL Data";
    }
    return data;
}
