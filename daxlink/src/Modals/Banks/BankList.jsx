export default function BankList(props) {
  return (
    <div>
      <div>
        <img
          src={props.BankImage}
          alt="Bank"
          style={{ height: "45px", borderRadius: "50px" }}
        />
        <span style={{ marginLeft: "20px" }}>{props.BankName}</span>
      </div>
    </div>
  );
}
