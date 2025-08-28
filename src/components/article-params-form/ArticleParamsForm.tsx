import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react'

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpenBar, setIsOpenBar] = useState(false);

	const toggleOpenBar = () => setIsOpenBar(prev => !prev);

	const moveSideBar = () => {
		// lдобавить aside .container_open
	}

	return (
		<>
			<ArrowButton isOpen={isOpenBar} onClick={toggleOpenBar} />
			{isOpenBar && (
				<aside className={`${styles.container} ${isOpenBar ? styles.container_open : ''} `}>
					<form className={styles.form}>
						<div className={styles.bottomContainer}>
							<Button title='Сбросить' htmlType='reset' type='clear' />
							<Button title='Применить' htmlType='submit' type='apply' />
						</div>
					</form>
				</aside>
			)}
		</>
	);
};
