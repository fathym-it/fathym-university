import { Component, OnInit } from '@angular/core';
import { DataGridConfig, ColumnDefinition,  } from '@lcu/daf-ui';
import { GridService } from './services/grid.service';
import { DataGridPagination } from '@lcu/daf-ui/lib/data-grid/config/data-grid-pagination.config';
import { DataGridFeatures } from '@lcu/daf-ui/lib/data-grid/config/data-grid-features.config';
import { PipeConstants } from '@lcu/daf-ui/lib/data-grid/utils/constants/pipe.constants';

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
      new ColumnDefinition('isActive', 'Active', (item) => item, false, true),
      new ColumnDefinition('balance', 'Balance', (item) => item, false, false),
      new ColumnDefinition('name', 'Name', (item) => item, false, false),
      new ColumnDefinition('company', 'Company', (item) => item, false, false),
      new ColumnDefinition('email', 'Email', (item) => item, false, false),
      new ColumnDefinition('phone', 'Phone', (item) => item, false, false),
      new ColumnDefinition('temp', 'Temperature', (item) => item, false, false, PipeConstants.PIPE_TEMP_FAHRENHEIT),
      new ColumnDefinition('decimal', 'Decimal', (item) => item, false, false, PipeConstants.PIPE_NUMBER)

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
  // private iconConfiguration(data: IWeatherCloudModel, colType: string): string {
  //   switch (colType.toUpperCase()) {
  //     case 'TEMPMIN':
  //       return WeatherCloudConditionIcons.temperature(data.tempMin);
  //     break;
  //     case 'TEMPMAX':
  //       return WeatherCloudConditionIcons.temperature(data.tempMax);
  //     break;
  //     case 'PRECIPMAX':
  //       return WeatherCloudConditionIcons.precipitationType(data);
  //     break;
  //     case 'WINDSPDMAX':
  //       return WeatherCloudConditionIcons.windSpeed(data.windSpdMax);
  //     break;
  //     case 'WINDGUSTMAX':
  //       return WeatherCloudConditionIcons.windGust(data.windGustMax);
  //     break;
  //   }
 // }
}
