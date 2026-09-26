import type { ComponentType } from 'react'
import TextExercise from './01-text/Exercise'
import SpacingExercise from './02-spacing/Exercise'
import ColorsExercise from './03-colors/Exercise'
import BordersExercise from './04-borders/Exercise'
import WidthHeightExercise from './05-width-height/Exercise'
import FlexExercise from './06-flex/Exercise'
import FlexAlignmentExercise from './07-flex-alignment/Exercise'
import GridExercise from './08-grid/Exercise'
import ResponsiveExercise from './09-responsive/Exercise'
import HoverFocusExercise from './10-hover-focus/Exercise'
import PositioningExercise from './11-positioning/Exercise'
import CardExercise from './12-card/Exercise'
import FormExercise from './13-form/Exercise'
import NavbarExercise from './14-navbar/Exercise'
import DarkModeExercise from './15-dark-mode/Exercise'

export type Exercise = {
  id: string
  title: string
  component: ComponentType
}

export const exercises: Exercise[] = [
  { id: '01', title: 'Text', component: TextExercise },
  { id: '02', title: 'Spacing', component: SpacingExercise },
  { id: '03', title: 'Colors', component: ColorsExercise },
  { id: '04', title: 'Borders', component: BordersExercise },
  { id: '05', title: 'Width & Height', component: WidthHeightExercise },
  { id: '06', title: 'Flexbox', component: FlexExercise },
  { id: '07', title: 'Flex Alignment', component: FlexAlignmentExercise },
  { id: '08', title: 'Grid', component: GridExercise },
  { id: '09', title: 'Responsive', component: ResponsiveExercise },
  { id: '10', title: 'Hover & Focus', component: HoverFocusExercise },
  { id: '11', title: 'Positioning', component: PositioningExercise },
  { id: '12', title: 'Card', component: CardExercise },
  { id: '13', title: 'Form', component: FormExercise },
  { id: '14', title: 'Navbar', component: NavbarExercise },
  { id: '15', title: 'Dark Mode', component: DarkModeExercise },
]
