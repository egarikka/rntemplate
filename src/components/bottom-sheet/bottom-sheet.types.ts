import { ReactNode, RefObject } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export interface IBottomSheetProps {
  children: ReactNode;
  renderHeader: ReactNode;
  snapPoints: (string | number)[];
  sheetRef: RefObject<BottomSheetModal>;
}
