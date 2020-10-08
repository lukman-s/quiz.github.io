
import { domElements as dom, domClasslists as classes } from './base';


/*
*- toggle slide overview and table
*/

export const detailsToggle = () => {
        dom.details.classList.toggle(classes.detailShow);

        if (!dom.details.classList.contains(classes.detailShow )) {
            dom.detailsTable.classList.remove(classes.tableShow);
            dom.detailsOverview.classList.remove(classes.noShadow);
      
    }
};

export const tableToggle = () => {
    dom.detailsTable.classList.toggle(classes.tableShow);
    dom.detailsOverview.classList.toggle(classes.noShadow);
};

export const closeDetails = e => {
    if (!e.target.classList.contains(classes.hasEvent) || e.target === dom.details) {
        dom.details.classList.remove(classes.detailShow);
        dom.detailsTable.classList.remove(classes.tableShow);
        dom.detailsOverview.classList.remove(classes.noShadow);
    }
};