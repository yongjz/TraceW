import React from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 20,
  float:'right',
};

class MerchandiseInfoTextField extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          fullWidth={true}
        /><br/>
        <br/>
        <TextField
          hintText="The hint text can be as long as you want, it will wrap."
          fullWidth={true}
        /><br/>
        <TextField
          defaultValue="Default Value"
          rows={2}
          rowsMax={4}
          fullWidth={true}
        /><br/>
        <TextField
          hintText="MultiLine with rows: 2 and rowsMax: 4"
          multiLine={true}
          rows={2}
          rowsMax={4}
          fullWidth={true}
        /><br/>
        <TextField
          hintText="Message Field"
          floatingLabelText="MultiLine and FloatingLabel"
          multiLine={true}
          rows={2}
          fullWidth={true}
        /><br/>
        <DatePicker hintText="Portrait Dialog" /><br/>
        <DatePicker hintText="Landscape Dialog" mode="landscape" />
        <RaisedButton label="Secondary" secondary={true} style={style} />
      </div>
    );
  }
}

export default MerchandiseInfoTextField;