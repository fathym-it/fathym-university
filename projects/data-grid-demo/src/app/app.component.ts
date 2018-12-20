import { GridService } from './services/grid.service';
import { Component, OnInit } from '@angular/core';
import { DataGridConfig, ColumnDefinition, DataGridPagination, DataGridFeatures, PipeConstants } from '@lcu/daf-ui';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public gridParameters: DataGridConfig;
  public title: string = 'data-grid-demo';
  private columnDefs: Array<ColumnDefinition> = [];

  constructor(private gridService: GridService) {}

  ngOnInit() {
    this.setGridParameters();
  }

  private setGridParameters(): void {
    this.columnDefs = [
      new ColumnDefinition('select', null, null, false),
      new ColumnDefinition('icon', null, (item) => item, true, false, null, this.iconConfiguration),
      new ColumnDefinition('isActive', 'Active', (item) => item, false, true),
      new ColumnDefinition('balance', 'Balance', (item) => item, false, true),
      new ColumnDefinition('name', 'Name', (item) => item, false, true),
      new ColumnDefinition('company', 'Company', (item) => item, false, true),
      new ColumnDefinition('email', 'Email', (item) => item, false, true),
      new ColumnDefinition('phone', 'Phone', (item) => item, false, true),
      new ColumnDefinition('temp', 'Temperature', (item) => item, false, true, PipeConstants.PIPE_TEMP_FAHRENHEIT),
      new ColumnDefinition('decimal', 'Decimal', (item) => item, false, true, PipeConstants.PIPE_NUMBER)
    ];

    const paginationDetails: DataGridPagination = new DataGridPagination();
    paginationDetails.pageSize = 10;
    paginationDetails.pageSizeOptions = [1, 5, 10, 20, 30];

    const features: DataGridFeatures = new DataGridFeatures();
    features.paginator = paginationDetails;
    features.filter = false;

   this.gridParameters = new DataGridConfig(this.gridService.demoData(), this.columnDefs, features);
  }

   /**
   * Callback function for setting the icons
   * @param data Data model
   * @param colType Column data type
   */
  private iconConfiguration(data: any, colType: string): string {

    // this will show a user icon
    return data.icon;
 }
}
