"""Initial database tables

Revision ID: 3490f6728152
Revises: 
Create Date: 2025-04-04 19:42:35.643004

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3490f6728152'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog', schema=None) as batch_op:
        # First add column as nullable
        batch_op.add_column(sa.Column('read_time', sa.Integer(), nullable=True))

        # Keep existing image_url alteration
        batch_op.alter_column('image_url',
                              existing_type=sa.VARCHAR(length=500),
                              nullable=False)

    # Set default value for existing records
    op.execute('UPDATE blog SET read_time = 5 WHERE read_time IS NULL')

    # Now alter column to be NOT NULL
    with op.batch_alter_table('blog', schema=None) as batch_op:
        batch_op.alter_column('read_time', nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog', schema=None) as batch_op:
        batch_op.alter_column('image_url',
               existing_type=sa.VARCHAR(length=500),
               nullable=True)
        batch_op.drop_column('read_time')

    # ### end Alembic commands ###
