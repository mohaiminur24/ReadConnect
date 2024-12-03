import { StyleSheet } from 'react-native';
import { typography } from './typography';

export const textStyles = StyleSheet.create({
  poppinsBold32: { fontFamily: typography.poppinsBold, fontSize: 32 },
  poppinsBold24: { fontFamily: typography.poppinsBold, fontSize: 24 },
  poppinsBold16: { fontFamily: typography.poppinsBold, fontSize: 16 },

  poppinsSemiBold24: { fontFamily: typography.poppinsSemiBold, fontSize: 24 },
  poppinsSemiBold16: { fontFamily: typography.poppinsSemiBold, fontSize: 16 },
  poppinsSemiBold14: { fontFamily: typography.poppinsSemiBold, fontSize: 14 },
  poppinsSemiBold12: { fontFamily: typography.poppinsSemiBold, fontSize: 12 },
  poppinsSemiBold10: { fontFamily: typography.poppinsSemiBold, fontSize: 10 },

  poppinsMedium16: { fontFamily: typography.poppinsMedium, fontSize: 16 },
  poppinsMedium14: { fontFamily: typography.poppinsMedium, fontSize: 14 },
  poppinsMedium13: { fontFamily: typography.poppinsMedium, fontSize: 13 },
  poppinsMedium12: { fontFamily: typography.poppinsMedium, fontSize: 12 },
  poppinsMedium10: { fontFamily: typography.poppinsMedium, fontSize: 10 },

  poppinsRegular14: { fontFamily: typography.poppinsRegular, fontSize: 14 },
  poppinsRegular13: { fontFamily: typography.poppinsRegular, fontSize: 13 },
  poppinsRegular12: { fontFamily: typography.poppinsRegular, fontSize: 12 },
});
