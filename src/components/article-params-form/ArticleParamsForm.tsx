import { useState } from 'react'

import { fontFamilyOptions, fontSizeOptions, defaultArticleState, contentWidthArr, backgroundColors } from 'src/constants/articleProps';
import { OptionType, fontColors } from 'src/constants/articleProps';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from '../../ui/select'
import { RadioGroup } from '../../ui/radio-group'
import { Separator } from '../../ui/separator'
import { Text } from '../../ui/text'


import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const { 
		fontFamilyOption, 
		fontColor, 
		backgroundColor, 
		contentWidth, 
		fontSizeOption 
	} = defaultArticleState

	const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

	const [selectedFont, setSelectedFont] = useState<OptionType>(fontFamilyOption);
	const [selectedSizeFont, setSizeFont] = useState<OptionType>(fontSizeOption);
	const [selectedFontColor, setFontColor] = useState<OptionType>(fontColor);
	const [selectedBackgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColor);
	const [selectedContentWidth, setContentWidth] = useState<OptionType>(contentWidth);

	const toggleOpenSideBar = () => setIsOpenSideBar(prev => !prev);

	return (
		<>
			<ArrowButton isOpen={isOpenSideBar} onClick={toggleOpenSideBar} />

			{isOpenSideBar && (
				<aside className={`${styles.container} ${isOpenSideBar ? styles.container_open : ''} `}>
					<form className={styles.form}>

						<Text as="h2" size={31} weight={800} uppercase>
							задайте параметры
						</Text>

						<div className={styles.section}>
							<Select 
								selected={selectedFont} 
								options={fontFamilyOptions} 
								placeholder={selectedFont.value}
								onChange={setSelectedFont} 
								title="шрифт"
							/>
						</div>

						<div className={styles.section}>
							<RadioGroup
								name={selectedSizeFont.className}
								options={fontSizeOptions}
								selected={selectedSizeFont}
								onChange={setSizeFont} 
								title="размер шрифта"
							/>
						</div>

						<div className={styles.section}>
							<Select 
								selected={selectedFontColor} 
								options={fontColors} 
								placeholder={selectedFontColor.className}
								onChange={setFontColor} 
								title="цвет шрифта"
							/>
						</div>

						<div className={styles.section}>
							<Separator />
						</div>

						<div className={styles.section}>
							<Select 
								selected={selectedBackgroundColor} 
								options={backgroundColors} 
								placeholder={selectedBackgroundColor.className}
								onChange={setBackgroundColor}
								title="цвет фона"
							/>
						</div>

						<div className={styles.section}>
							<Select 
								selected={selectedContentWidth} 
								options={contentWidthArr} 
								placeholder={selectedContentWidth.className}
								onChange={setContentWidth}
								title="ширина контента"
							/>
						</div>

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
