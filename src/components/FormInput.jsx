function FormInput({ label, type, name }) {
  return (
    <label className='form-control w-full me-8 mr-4  '>
      <div className='label'>
        <span className='label-text capitalize'>{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder='Type here'
        className='input input-bordered w-full'
      />
    </label>
  );
}

export default FormInput;
