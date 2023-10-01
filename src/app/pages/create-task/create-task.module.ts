import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

import { CreateTaskComponent } from './create-task.component';
import { tuiSvgOptionsProvider, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiLoaderModule } from '@taiga-ui/core';
// import {
//   TUI_EDITOR_EXTENSIONS,
//   TUI_EDITOR_MAX_IMAGE_WIDTH,
//   TUI_EDITOR_MIN_IMAGE_WIDTH,
//   TUI_IMAGE_LOADER,
// } from '@taiga-ui/addon-editor';
import { EDITOR_MODULES } from './editor-modules/editor-modules';

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiLoaderModule,
    EDITOR_MODULES,

  ],
  exports: [CreateTaskComponent],
  providers: [
    // A workaround because StackBlitz does not support assets
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    // {
    //   provide: TUI_EDITOR_EXTENSIONS,
    //   useValue: []
    // }
  ],
})
export class CreateTaskModule {
}
