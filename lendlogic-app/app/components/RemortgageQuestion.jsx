
export const RemortgageQuestion = () => {
  return (
    <div className="flex flex-col items-center">
        <form className="flex flex-col bg-slate-600 my-5">
        <h2>What are your remortgage goals?</h2>
        <input value="Repay your mortgage quicker?" type="submit"></input>
        <input value="Reduce your monthly payments?" type="submit"></input>
        <input value="Change mortgage type?" type="submit"></input>
        <input value="Release equity?" type="submit"></input>
      </form>

    </div>
  )
}
