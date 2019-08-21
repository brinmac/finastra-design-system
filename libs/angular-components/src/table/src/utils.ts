import { Sort } from '@angular/material';

export class UxgSort implements Sort{
    active: string;    
    direction: import("@angular/material").SortDirection;
}

export class UxgColumn{
    id? : string;
    name: string; // column name 
    type: string; // the data type of this column => can apply different template to this column
    align: 'left' | 'right' | 'center'; // text align in cell
}
