import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react'
import { Select } from '../../ui/select'
import { RadioGroup } from '../../ui/radio-group'
import { OptionType } from 'src/constants/articleProps';
import { fontFamilyOptions, fontSizeOptions, defaultArticleState } from 'src/constants/articleProps';
import type { MouseEventHandler } from 'react';


import styles from './ArticleParamsForm.module.scss';


 


export const ArticleParamsForm = () => {
	const { 
		fontFamilyOption, 
		fontColor, 
		backgroundColor, 
		contentWidth, 
		fontSizeOption 
	} = defaultArticleState

	const [isOpenBar, setIsOpenBar] = useState<boolean>(false);
	const [selectedFont, setSelectedFont] = useState<OptionType | null>(fontFamilyOption);
	const [selectedSizeFont, setSizeFont] = useState<OptionType>(fontSizeOption);

	const toggleOpenBar = () => setIsOpenBar(prev => !prev);

	return (
		<>
			<ArrowButton isOpen={isOpenBar} onClick={toggleOpenBar} />

			{isOpenBar && (
				<aside className={`${styles.container} ${isOpenBar ? styles.container_open : ''} `}>
					<form className={styles.form}>

						<Select 
							selected={selectedFont} 
							options={fontFamilyOptions} 
							placeholder={fontFamilyOptions[0].title}
							onChange={setSelectedFont} 
							title="шрифт"
						/>

						<RadioGroup
							name={selectedSizeFont.className}
							options={fontSizeOptions}
							selected={selectedSizeFont}
							onChange={setSizeFont} 
							title="размер шрифта"
						/>

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
