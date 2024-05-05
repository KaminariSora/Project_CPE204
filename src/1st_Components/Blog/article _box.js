import React, { useState, useEffect } from 'react';
import { articles } from './article_data.js';

function Article({ imgSrc, bodyText, subtitle, date }) {
    return (
        <div className="article-box">
            <img src={imgSrc} alt="Article" />
            <p id="body-text">{bodyText}</p>
            <p id="subtitle-text">{subtitle}</p>
            <p>{date}</p>
        </div>
    );
}

function ArticleContainer() {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const paginate = (pageNumber) => {
        if(pageNumber < 1) {
            setCurrentPage(totalPages)
        }
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        paginate(currentPage);
    }, [currentPage]);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 5;
    
        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => paginate(i)}
                        className={currentPage === i ? 'activate' : ''}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
            let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);
    
            if (endPage - startPage < maxPageNumbersToShow - 1) {
                startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
            }
    
            if (startPage > 1) {
                pageNumbers.push(<span key="startEllipsis">...</span>);
            }
    
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => paginate(i)}
                        className={currentPage === i ? 'activate' : ''}
                    >
                        {i}
                    </button>
                );
            }
    
            if (endPage < totalPages) {
                pageNumbers.push(<span key="endEllipsis">...</span>);
            }
    
            // Display the last page number
            pageNumbers.push(
                <button
                    key={totalPages}
                    onClick={() => paginate(totalPages)}
                    className={currentPage === totalPages ? 'activate' : ''}
                >
                    {totalPages}
                </button>
            );
        }
    
        return pageNumbers;
    };
    
    
    return (
        <div>
            <article className="article-container">
                {currentArticles.map(article => (
                    <Article
                        key={article.id}
                        imgSrc={article.imgSrc}
                        bodyText={article.bodyText}
                        subtitle={article.subtitle}
                        date={article.date}
                    />
                ))}
            </article>
            <div className="pagination">
                <button onClick={() => paginate(currentPage - 1)} id='span'>&lt;&lt;&lt;ก่อนหน้า</button>
                {renderPageNumbers()}
                <button onClick={() => paginate(currentPage + 1)} id='span'>ถัดไป&gt;&gt;&gt;</button>
            </div>
        </div>

    );
}

export default ArticleContainer;