import './profForm.css';



const ProfForm = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div style={{marginBottom: '2px'}} className="profForm">
      <label style={{marginBottom: 0}}>{label}</label>
      <input className='inputProfile'
        style={{marginTop: 0}}
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default ProfForm;