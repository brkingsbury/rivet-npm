import { AfterViewInit, QueryList } from '@angular/core';
import { RivetCarouselSlideDirective } from './rivet-carousel-slide.directive';
import * as ɵngcc0 from '@angular/core';
export declare class RivetCarouselComponent implements AfterViewInit {
    slides: QueryList<RivetCarouselSlideDirective>;
    slideIndex: number;
    slideOffset: string;
    pageTo(index: any): void;
    pageForward(): void;
    pageBack(): void;
    private focusSlide;
    onPagerKeydown(e: any): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RivetCarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RivetCarouselComponent, "advicent-rivet-carousel", never, {}, {}, ["slides"], ["*"]>;
}

//# sourceMappingURL=rivet-carousel.component.d.ts.map