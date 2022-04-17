function cors_test(test_url) {
    let cors_data;
    if (test_url) {
        $.ajax ({
            url: test_url,
            success: function(data) {
                cors_data = data;
            }
        });
    } else {
        cors_data = "No URL Data";
    }
    return cors_data;
}
