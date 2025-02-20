import styles from '../../../assets/css/culture/CultureMain.module.css';

function CultureMuseumSearch(props) {
    return (
        <div className={styles.cultureBookMain} style={{ paddingBottom: '0' }}>
            <div className={styles.bestsellerHeader}>검색 결과</div>
            <div className={styles.bestsellerContainer} style={{ height: '600px' }}>
                {
                    ( props.museumContents && props.museumContents.length > 0 ) && props.museumContents.map((data, index) => {
                        return (
                            <div
                                className={`${styles.bestsellerFrame} ${styles.assetSearchFrame}`}
                                key={`${data.rn}-${index}`}
                                onClick={() => {window.open(`${data.url}`)}}
                            >
                                <div className={styles.bestsellerFrameNo}>{index + 1}.</div>
                                <div>
                                    <img
                                        src={ data.referenceIdentifier ? ( !data.referenceIdentifier.includes('https://') ? `https://${data.referenceIdentifier}` : data.referenceIdentifier )
                                            : '/images/culture/noImage.png' }
                                        alt={data.title}
                                        onError={(e) => {e.target.src = '/images/culture/noImage.png';}}
                                        style={{
                                            width: '80px',
                                            height: '110px'
                                        }}
                                    />
                                </div>
                                <div className={styles.bestsellerFrameInfo} style={{ height: '124px', marginTop: '-2px' }}>
                                    <div className={styles.bestsellerFrameInfoHeader}>
                                        {data.title}
                                    </div>
                                    <div className={styles.commonInfoStyle}>
                                        <div className={styles.commonEllipsisStyle}>
                                            {data.creator}
                                        </div>
                                        <span className={styles.commonEllipsisStyleNoMax}>
                                            &nbsp;| {data.temporal || '내용없음'} | {data.spatial}
                                        </span>
                                    </div>
                                    <div className={styles.bestsellerFrameInfoDetail} style={{ lineHeight: '18px' }}>
                                        <div>{`1. 자원의 물리적(물질적) 상태: ${data.medium || '내용 없음'}`}</div>
                                        <div>{`2. 자원에 대한 권리: ${data.rights || '내용 없음'}`}</div>
                                        <div className={styles.commonEllipsisStyleNoMax}>
                                            {`3. 내용: ${data.description || data.extent || '없음'}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CultureMuseumSearch;