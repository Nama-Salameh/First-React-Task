export function CancelButton(){
    return (
        <button className="button--cancel">Cancel</button>
    )
}
export function SaveButton(){
    return (
        <button className="button--save">SAVE</button>
    )
}
export default function SubmitButton(){
    return (
        <div className="button--submit">
        <CancelButton/>
        <SaveButton/>
        </div>
    );
}