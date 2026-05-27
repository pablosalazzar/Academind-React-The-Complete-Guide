import {formatter} from '../util/investment'

export default function Table({ annualData }) {
    console.log(annualData)
    return (<>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value EOF</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody>

                {annualData.map(data => <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.interest) }</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.annualInvestment)}</td>
                </tr>)}

            </tbody>
        </table>

    </>)
}