<?php
 
    if($_POST) {
        $visitor_name = "";
        $visitor_email = "";
        $visitor_message = "";
        $captcha = "";
        
        if(isset($_POST['visitor_name'])) {
            $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
        }
        
        if(isset($_POST['visitor_email'])) {
            $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
            $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        }
        
        if(isset($_POST['visitor_message'])) {
            $visitor_message = htmlspecialchars($_POST['visitor_message']);
        }
        
        
        $recipient = "adamjosephprinz@gmail.com";
        $subject = "Client Contact";

        
        $headers  = 'MIME-Version: 1.0' . "\r\n"
        .'Content-type: text/html; charset=utf-8' . "\r\n"
        .'From: ' . $visitor_email . "\r\n"
        .'Name: ' . $visitor_name . "\r\n"
        .'Message: ' . $visitor_message . "\r\n";

        $headers2  = 'MIME-Version: 1.0' . "\r\n"
        .'Content-type: text/html; charset=utf-8' . "\r\n"
        .'From: ' . $visitor_email . "\r\n"
        .'Name: ' . $visitor_name . "\r\n"
        .'Message: ' . $visitor_message . "\r\n";
        
        if(mail($recipient, $subject, $headers, $headers2)) {
            echo "
                <div id='response'>
                    <link rel='stylesheet' type='text/css' href='styles.css' />
                    <p>Thank you so much, $visitor_name! Your message has been sent and I'll get back to you as soon as possible.</p>
                    <a href='/'>Take Me Back Home</a>
                </div>";
        } else {
            echo "
                <div id='response'>
                    <link rel='stylesheet' type='text/css' href='styles.css' />
                    <p>I am so sorry, but something went wrong. You can also email me directly at <span>adamjosephprinz@gmail.com</span>.</p>
                    <a href='/'>Take Me Back Home</a>
                </div>";
        }
        
    } else {
        echo "
            <div id='response'>
                <link rel='stylesheet' type='text/css' href='styles.css' />
                <p>I am so sorry, but something went wrong. You can also email me directly at <span>adamjosephprinz@gmail.com</span>.</p>
                <a href='/'>Take Me Back Home</a>
            </div>";
    }
 
?>