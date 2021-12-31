import {StyleSheet} from 'react-native';
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  cf: {
    color: '#fff',
  },
  clb: {
    color: '#016df5',
  },
  cr: {
    color: 'red',
  },
  bgcf: {
    backgroundColor: '#fff',
  },
  fdr: {
    flexDirection: 'row',
  },
  fdc: {
    flexDirection: 'column',
  },
  aic: {
    alignItems: 'center',
  },
  jcsc: {
    justifyContent: 'center',
  },
  jcsb: {
    justifyContent: 'space-between',
  },
  fwb:{
    fontWeight:"bold"
  },
  fs:x=>({fontSize:x}),
  h: x => ({height: x}),
  w: x => ({width: x}),
  wh: (x, y) => ({width: x, height: y || x}),

  ml: x => ({marginLeft: x}),
  mr: x => ({marginRight: x}),
  mt: x => ({marginTop: x}),
  mb: x => ({marginBottom: x}),
  mlr: x => ({marginLeft: x, marginRight: x}),
  mtb: x => ({marginTop: x, marginBottom: x}),
  ma: x => ({marginTop: x, marginBottom: x, marginLeft: x, marginRight: x}),

  pl: x => ({paddingLeft: x}),
  pr: x => ({paddingRight: x}),
  pt: x => ({paddingTop: x}),
  pb: x => ({paddingBottom: x}),
  plr: x => ({paddingLeft: x, paddingRight: x}),
  ptb: x => ({paddingTop: x, paddingBottom: x}),
  pa: x => ({paddingTop: x, paddingBottom: x, paddingLeft: x, paddingRight: x}),
});
export default s;
