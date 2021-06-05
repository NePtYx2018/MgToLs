/* /home/resources/js/page.js */
$(function () {

    // Anchors
    if ($('#hugger-arrow').length > 0) new PAYPAL.Marketing.ScrollButton('#hugger-arrow');
    
    // No signup form
    if ($('#hero-signup').length === 0) return; 
    
    // Stop video
    $('#hero-signup').on('focus', 'input', PAYPAL.Marketing.MovingBackground.BlockAll);

    // Play video
    $('#hero-signup').on('blur', 'input', PAYPAL.Marketing.MovingBackground.UnblockAll);

    // At least one symbol
    jQuery.validator.addMethod("symbol", function (value, element) {
        return /\d/.test(value) || /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\\]/.test(value);
    }, PAYPAL.content["Include at least one number or symbol (!@#$%^)"]);

    // Not email
    jQuery.validator.addMethod("notemail", function (value, element) {
        return value !== $('#email-signup').val();
    }, PAYPAL.content["Do not use your email address"]);

    // No repeating characters - what this is a rule?
    jQuery.validator.addMethod("norepeat", function (value, element) {
        return !/(.)\1{3}/.test(value);
    }, PAYPAL.content["Do not use four repeated characters"]);

    // No number sequences
    jQuery.validator.addMethod("noseq", function (value, element) {
        var reverseValue = value.split("").reverse().join(""),
            sequences = ["0123", "1234", "2345", "3456", "4567", "5678", "6789", "7890", "8901", "9012"];
        // go through each sequence and check it against the input value forward and reverse
        for (var i = 0; i < sequences.length; i++) {
            var sequence = sequences[i];
            if (value.indexOf(sequence) !== -1 || reverseValue.indexOf(sequence) !== -1) {
                return false;
            }
        };
        return true;
    }, PAYPAL.content["Do not use consecutive numbers (like 1234 or 4321)"]);

    // No keyboard sequences
    jQuery.validator.addMethod("nokeyseq", function (value, element) {
        var value = value.toLowerCase(),
            reverseValue = value.split("").reverse().join(""),
            sequences = [
                "qwer", "wert", "erty", "rtyu", "tyui", "yuio", "uiop", // row 2
                "asdf", "sdfg", "dfgh", "fghj", "ghjk", "hjkl", // row 3
                "zxcv", "xcvb", "cvbn", "vbnm" // row 4
            ];
        // go through each sequence and check it against the input value forward and reverse
        for (var i = 0; i < sequences.length; i++) {
            var sequence = sequences[i];
            if (value.indexOf(sequence) !== -1 || reverseValue.indexOf(sequence) !== -1) {
                return false;
            }
        };
        return true;
    }, PAYPAL.content["Do not use key sequences (like qwer or rewq)"]);

    // Second crazy sequence check
    jQuery.validator.addMethod("nokeyseq2", function (value, element) {
        var reverseValue = value.split("").reverse().join(""),
            sequences = ["`123", "890-", "90-=", // row 1
                "iop[", "op[]", "p[]\\", // row 2
                "jkl;", "kl;'", // row 3
                "bnm,", "nm,.", "m,./", // row 4
                "~!@#", "!@#$", "@#$%", "#$%^", "$%^&", "%^&*", "^&*(", "&*()", "*()_", "()_+", // shift + row 1
                "IOP{", "OP{}", "P{}|", // shift + row 2
                "JKL:", 'KL:"', // shift + row 3
                "BNM<", "NM<>", "M<>?" // shift + row 4
            ];
        // go through each sequence and check it against the input value forward and reverse
        for (var i = 0; i < sequences.length; i++) {
            var sequence = sequences[i];
            if (value.indexOf(sequence) !== -1 || reverseValue.indexOf(sequence) !== -1) {
                return false;
            }
        };
        return true;
    }, PAYPAL.content["Do not use four key sequence"]);
    $('#hero-signup').validate({
        rules: {
            email: {
                email: true,
                required: true
            },
            mpppwd: {
                required: true,
                minlength: 8,
                maxlength: 20,
                symbol: true,
                notemail: true,
                norepeat: true,
                noseq: true,
                nokeyseq: true,
                nokeyseq2: true,
            },
            mppconfirmpwd: {
                required: true,
                equalTo: '#password-signup'
            }
        },
        showErrors: function (errorMap, errorList) {
            // Remove existing errors
            $('#hero-signup .error-overlay').remove();
            $('#hero-signup .input-wrapper').removeClass('error');
            // Loop through each error
            for (var i = 0; i < errorList.length; i++) {
                var wrapper = $(errorList[i].element).closest('.input-wrapper'),
                    message = '';
                wrapper.addClass('error');
                // Add message below
                var errorDiv = $("<div class='error-overlay'></div>");
                errorDiv.text(errorList[i].message);
                wrapper.append(errorDiv);
            }
        }
    });

    // Placeholder for signup
    if ($('#email-signup').length > 0 && typeof ($('#email-signup').placeholder) !== 'undefined') {
        $('#email-signup').placeholder();
        $('#email-signup').css('top', '0').css('left', '0');
        $('#password-signup').placeholder();
        $('#password-signup').css('top', '0').css('left', '0');
        $('#confirm-signup').placeholder();
        $('#confirm-signup').css('top', '0').css('left', '0');
    }

    // pxp hero signup treatment1
    $('#hero-signup-btn').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('hide');
        $('#hero-signup').slideToggle('fast');
        $('#email-signup').focus();
    });

});

/**
 * Hero notification area
 */

$(function()
{
    // Show/Hide Notification
    $('#hero .hero-notification').on('click', function(e)
    {
        var t = $(e.target);
        
        // Clicked on anchor
        if (t.get(0).tagName === 'A' && !t.hasClass('expander') && !t.hasClass('closer')) return;
        
        // Click on open hero notification
        if (t.get(0).tagName !== 'A')
        {
            if (!t.closest('.hero-notification').hasClass('open')) return;
        }
        // Click on opener/closer link
        else
        {
            e.preventDefault();
        }
        
        // Switch open
        t.closest('.hero-notification').toggleClass('open');
        
        // Set height
        if (t.closest('.hero-notification').hasClass('open'))
        {
            var th = t.closest('.hero-notification').parent().height();
            t.closest('.hero-notification').css('height', th + 'px');
        }
        else
        {
            t.closest('.hero-notification').css('height', '');
        }
        
        // Focus
        window.setTimeout(function()
        {
            if (t.closest('.hero-notification').hasClass('open'))
            {
                t.closest('.hero-notification').find('.closer').focus();
            }
            else
            {
                t.closest('.hero-notification').find('.expander').focus();
            }
        }, 50);
    });
    
    // Resize notification window
    $(window).on('resize', function(e) 
    {
        var hn = $('#hero .hero-notification');
        if (hn.hasClass('open'))
        {
            var th = hn.parent().height();
            hn.css('height', th + 'px');
        }
    });
});

/**
 * Sticky navigation & expanding rows partials
 */
$(function() {
	// Sticky nav & fat-footer
    // adding condition to intilialize floating bar only when it exists
    if($('#sticky-nav').length !== 0){
        new PAYPAL.Marketing.FloatingBar('#sticky-nav');
    }
    $('#jump-bar-select, #fatfooter-select, #nav-bar-select').on('change', function(e)
    {
        var val = $(e.target).val();
        if (val) window.location = val;
    });

    // Adding current state, on sticky nav link clicks
    $('.sticky-nav-links').on('click', function(e){
        $('.sticky-nav-links').removeClass('current');
        $(e.currentTarget).addClass('current');
    });

    // Mobile expanding rows
    $('.expand-rows').on('click', '.expand', function(e)
    {
        e.preventDefault();

        var t = $(e.target),
        section = t.attr('id').substring(7);

        // Toggle open classes
        $(t).toggleClass('open');
        $('#para-' + section).toggleClass('open');
    });

    // closing android-banner
    $('.smart-banner .close').on('click', function(){
        $('.smart-banner').hide();
    });
});

