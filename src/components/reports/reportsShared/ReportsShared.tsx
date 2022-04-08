import Image from 'next/image'
import React from 'react'
import styles from './ReportsShared.module.css'
const ReportsShared = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "65vh", width: "100%" }}>
      <div>
        <Image src="/image/shared_location.svg" alt='shared_location' height={140} width={150} />
      </div>
      <div className={styles.Shared_blank_text}>
        <h2>Links to your shared reports will appear here</h2>
        <p>
          Apply filters to a report and click Share to get a link to the filtered report,
          <br />
          which you can send to others.
        </p>
      </div>
    </div>
  )
}

export default ReportsShared