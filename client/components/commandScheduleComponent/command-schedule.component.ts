import {Component, Input} from "@angular/core";

import {DeviceDetail} from "../../../lib/interfaces/device.interface";
//noinspection TypeScriptCheckImport
import template from "./command-schedule.component.html";

@Component({
    moduleId: module.id,
    selector: 'command-schedule-device',
    template: template
})
export class CommandScheduleComponent {

    lineChartData: Array<any> = [];

    @Input()
    set scheduleDevice(scheduleDevice: DeviceDetail) {

    }

}
