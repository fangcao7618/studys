import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }],
    'font': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '"Lucida' }, { 'unit': 'string', 'value': 'Grande",' }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'Arial,' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'backgroundColor': '#ff0000',
    'backgroundImage': 'url(../images/bg.jpg)',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': '80%',
    'backgroundPosition': '50% 50%',
    'backgroundAttachment': 'fixed'
  },
  'bgC': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }]
  },
  'bgClip': {
    'backgroundImage': 'url(../images/bg.jpg),
                    url(../images/bg.jpg),
                    url(../images/bg.jpg)',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 0.5 }],
    'zIndex': '2',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'yellow',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': '50% 0, 50% 45%, 50% 90%',
    'paddingTop': [{ 'unit': 'px', 'value': 200 }],
    'backgroundSize': '80%'
  }
});
