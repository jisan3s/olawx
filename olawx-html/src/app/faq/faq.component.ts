import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-faq',
    imports: [NgClass],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {

    // Accordion
    openSectionIndex: number = 0;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

}