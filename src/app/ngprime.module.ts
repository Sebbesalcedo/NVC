import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ProgressBarModule } from "primeng/progressbar";
import { PanelMenuModule } from "primeng/panelmenu";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { FormsModule } from "@angular/forms";
import { InputMaskModule } from "primeng/inputmask";
import { AccordionModule } from "primeng/accordion";
const primeModules = [
  TableModule,
  DynamicDialogModule,
  DynamicDialogModule,
  TriStateCheckboxModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  ToastModule,
  TableModule,
  InputTextModule,
  ButtonModule,
  PanelMenuModule,

  ButtonModule,
 
  AutoCompleteModule,
  ConfirmDialogModule,
  InputMaskModule,
 
  AccordionModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, primeModules, FormsModule],
  exports: [primeModules],
  providers: [ ConfirmationService],
})
export class NgprimeModule {}
