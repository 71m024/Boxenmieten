<?php

namespace Boxenmieten\BlogBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * CommentRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CommentRepository extends EntityRepository
{
    public function getCommentsForPost($blogId)
    {
        $qb = $this->createQueryBuilder('c')
                   ->select('c')
                   ->where('c.post = :post_id')
                   ->addOrderBy('c.created')
                   ->setParameter('post_id', $blogId);

        return $qb->getQuery()
                  ->getResult();
    }
    
    public function getLatestComments($limit = 10)
    {
        $qb = $this->createQueryBuilder('c')
                    ->select('c')
                    ->addOrderBy('c.id', 'DESC');

        if (false === is_null($limit)) {
            $qb->setMaxResults($limit);
        }

        return $qb->getQuery()
                  ->getResult();
    }
}