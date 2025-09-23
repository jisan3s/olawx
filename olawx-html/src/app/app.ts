declare let $: any;
import { FaqComponent } from './faq/faq.component';
import { Component, signal, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [FaqComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    protected readonly title = signal('Avib - Creative Multipurpose HTML Template');

    ngOnInit() {

        // Navbar
        $('.navbar .navbar-nav li a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        // Custom Cursor
        try {
            $(".single-demo-item.on-hover").on("mouseenter", function() {
                $('.envytheme-cursor').addClass('active');
                $('.envytheme-cursor2').addClass('active');
            });
            $(".single-demo-item.on-hover").on("mouseleave", function() {
                $('.envytheme-cursor').removeClass('active');
                $('.envytheme-cursor2').removeClass('active');
            });
        } catch (err) {}

        // Animate
        $('.animate').scrolla();
        
    }

}